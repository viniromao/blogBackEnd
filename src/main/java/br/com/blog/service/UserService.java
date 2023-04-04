package br.com.blog.service;

import br.com.blog.entity.User;
import br.com.blog.entity.exception.NotFoundException;
import br.com.blog.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user) {
        log.info("criando usuário {}", user);

        user.setSenha(DigestUtils.sha256Hex(user.getSenha()));

        userRepository.save(user);

        log.info("usuário {} criado", user.getNome());
    }



    public Optional<org.springframework.security.core.userdetails.User> findByToken(String token) {
        Optional<User> user = userRepository.findByToken(token);
        if(user.isPresent()){
            User userPersisted = user.get();
            org.springframework.security.core.userdetails.User userSecurity = new org.springframework.security.core.userdetails.User(userPersisted.getNome(), userPersisted.getSenha(), true, true, true, true,
                    AuthorityUtils.createAuthorityList("USER"));
            return Optional.of(userSecurity);
        }
        return  Optional.empty();
    }

    public void removeToken(String tokenValue) {
        User user = userRepository.findByToken(tokenValue)
                .orElseThrow(() -> new NotFoundException("Token inválido"));
        user.setToken(null);
        userRepository.save(user);
    }


}

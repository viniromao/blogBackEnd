package br.com.blog.service;

import br.com.blog.entity.User;
import br.com.blog.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user) {
        log.info("criando usuário {}", user);

        user.setSenha(DigestUtils.sha256Hex(user.getPassword()));

        log.info("senha encriptada: {}", user.getSenha());

        userRepository.save(user);

        log.info("usuário {} criado", user.getUsername());
    }
}

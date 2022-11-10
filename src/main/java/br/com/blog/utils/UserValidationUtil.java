package br.com.blog.utils;

import br.com.blog.entity.User;
import br.com.blog.entity.exception.UserAlreadyExistsException;
import br.com.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserValidationUtil {

    @Autowired
    private UserRepository userRepository;

    public void validate(User user) {

        List<User> listUser = userRepository.findByEmailOrNome(user.getEmail(), user.getNome());

        if (!listUser.isEmpty()) {
            throw new UserAlreadyExistsException("email ou username já cadastrados");
        }

    }
}

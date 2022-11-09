package br.com.blog.utils;

import br.com.blog.entity.User;
import br.com.blog.entity.exception.UserAlreadyExistsException;
import br.com.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserValidationUtil {

    @Autowired
    private static UserRepository userRepository;

    public static void validate(User user) {

        List<User> listUser = userRepository.findByEmailOrNome(user.getEmail(), user.getNome());

        if (!listUser.isEmpty()) {
            throw new UserAlreadyExistsException("email ou username já cadastrados");
        }

    }
}

package br.com.blog.controller;

import br.com.blog.config.security.TokenService;
import br.com.blog.controller.dto.LoginFormDTO;
import br.com.blog.controller.dto.TokenDTO;
import br.com.blog.entity.User;
import br.com.blog.entity.exception.NotFoundException;
import br.com.blog.repository.UserRepository;
import br.com.blog.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping
    @CrossOrigin
    public ResponseEntity<String> login(@RequestBody LoginFormDTO loginFormDTO) {
        loginFormDTO.setSenha(DigestUtils.sha256Hex(loginFormDTO.getSenha()));

        Optional<User> user = userRepository.findByEmailAndSenha(loginFormDTO.getEmail(), loginFormDTO.getSenha());

        if (user.isEmpty()) {
            throw new NotFoundException("usuário não existe");
        }

        User userPersisted = user.get();

        String token = UUID.randomUUID().toString();

        userPersisted.setToken(token);
        userRepository.save(userPersisted);

        return ResponseEntity.ok(token);
    }

}

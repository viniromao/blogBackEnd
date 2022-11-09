package br.com.blog.controller;

import br.com.blog.config.security.TokenService;
import br.com.blog.controller.dto.TokenDTO;
import br.com.blog.controller.dto.LoginFormDTO;
import br.com.blog.entity.User;
import br.com.blog.entity.exception.NotFoundException;
import br.com.blog.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity<TokenDTO> autenticar(@RequestBody LoginFormDTO loginFormDTO) {
        Authentication dadosLogin = loginFormDTO.converter();
        loginFormDTO.setSenha(DigestUtils.sha256Hex(loginFormDTO.getSenha()));

        Optional<User> user = userRepository.findByEmailAndSenha(loginFormDTO.getEmail(), loginFormDTO.getSenha());

        if (user.isEmpty()) {
            throw new NotFoundException("usuário não existe");
        }

        String token = tokenService.gerarToken(dadosLogin);
        return ResponseEntity.ok(new TokenDTO(token, "Bearer"));
    }

}

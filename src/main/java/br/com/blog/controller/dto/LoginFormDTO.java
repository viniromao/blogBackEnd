package br.com.blog.controller.dto;

import lombok.Data;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

@Data
public class LoginFormDTO {

    private String email;
    private String senha;

    public Authentication converter() {
        return new UsernamePasswordAuthenticationToken(email, senha);
    }

}

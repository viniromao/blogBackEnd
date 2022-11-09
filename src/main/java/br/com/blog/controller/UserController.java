package br.com.blog.controller;

import br.com.blog.controller.dto.UserDTO;
import br.com.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static br.com.blog.utils.UserValidationUtil.validate;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody UserDTO userDTO) {

        validate(userDTO.toDomain());

        userService.save(userDTO.toDomain());

        return ResponseEntity.ok().build();
    }

}

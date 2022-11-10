package br.com.blog.controller;

import br.com.blog.controller.dto.UserDTO;
import br.com.blog.service.UserService;
import br.com.blog.utils.UserValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidationUtil userValidationUtil;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody UserDTO userDTO) {

        userValidationUtil.validate(userDTO.toDomain());

        userService.save(userDTO.toDomain());

        return ResponseEntity.ok().build();
    }

}

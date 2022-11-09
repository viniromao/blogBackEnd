package br.com.blog.entity.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException (String message) {
        super(message);
    }
}

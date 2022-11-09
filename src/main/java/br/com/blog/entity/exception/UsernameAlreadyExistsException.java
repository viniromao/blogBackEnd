package br.com.blog.entity.exception;

public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException (String message) {
        super(message);
    }
}
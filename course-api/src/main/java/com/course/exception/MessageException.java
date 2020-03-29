package com.course.exception;

/**
 * MessageException
 */
public class MessageException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public MessageException(String message) {
        super(message);
    }
}
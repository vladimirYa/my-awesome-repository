package com.myawesomerepository.backend.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Vlad Miliutin
 */
@RestController
public class HelloController {

    @GetMapping(value = "/hello")
    public String hello(){
        return "Hello World";
    }
}

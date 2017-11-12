package com.myawesomerepository.backend.contoller;

import com.fasterxml.jackson.databind.JsonNode;
import com.myawesomerepository.backend.entity.User;
import com.myawesomerepository.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by vovo on 12.11.17.
 */
@RestController()
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/user/{name}")
    private User getUserByName(@PathVariable String name){
        return userService.getByName(name);
    }

    @PostMapping(value="/user")
    private User saveUserData(@RequestBody JsonNode body) {
        return userService.save(body);
    }
}

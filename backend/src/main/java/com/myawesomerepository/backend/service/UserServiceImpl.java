package com.myawesomerepository.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.myawesomerepository.backend.entity.User;
import com.myawesomerepository.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by vovo on 12.11.17.
 */
@Service()
public class UserServiceImpl implements UserService{
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public User save(JsonNode body) {
        ObjectMapper objectMapper = new ObjectMapper();
        User user = null;
        try {
            user = objectMapper.treeToValue(body, User.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return iUserRepository.save(user);
    }

    @Override
    public User getByName(String name) {
        return iUserRepository.findByName(name);
    }

    @Override
    public User getByEmail(String email) {
        return iUserRepository.findByEmail(email);
    }
}

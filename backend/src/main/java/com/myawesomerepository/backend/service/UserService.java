package com.myawesomerepository.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.myawesomerepository.backend.entity.User;

/**
 * Created by vovo on 12.11.17.
 */
public interface UserService {
    User save(JsonNode body);
    User getByName(String name);
    User getByEmail(String email);
}

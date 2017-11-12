package com.myawesomerepository.backend.repository;

import com.myawesomerepository.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by vovo on 12.11.17.
 */
public interface IUserRepository extends JpaRepository<User, Long>{
    User findByName(String name);
    User findByEmail(String email);
}

package com.myawesomerepository.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by vovo on 12.11.17.
 */
@Data
@Table(name = "users")
@Entity(name = "user")
public class User {

    @Id
    @JsonProperty("user_id")
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @JsonProperty("name")
    @Column(name = "name")
    private String name;

    @JsonProperty("surname")
    @Column(name = "surname")
    private String surname;

    @JsonProperty("email")
    @Column(name = "email")
    private String email;

    @JsonProperty("password")
    @Column(name = "password")
    private String password;
}

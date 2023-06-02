package com.monthlyweekly.expensesproject.JpaEntity;

//import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "userinfo")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 4, max = 50)
    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @NotNull
    @Email
    @Size(max = 100)
    @Column(name = "email", nullable = false)
    private String email;

    @Pattern(regexp="(^$|[0-9]{10})")
    @Size(max = 20)
    @Column(name = "phone" , length = 20)
    private String phone;

    @NotNull
    @Size(min = 8, max = 64) // Minimum size of 8 is considered secure
    @Column(name = "pass", nullable = false)
    private String pass;

    // getters and setters
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}

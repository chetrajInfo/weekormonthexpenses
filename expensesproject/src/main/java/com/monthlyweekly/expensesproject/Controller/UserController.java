package com.monthlyweekly.expensesproject.Controller;


import com.monthlyweekly.expensesproject.JpaEntity.Login;
import com.monthlyweekly.expensesproject.JpaEntity.User;
import com.monthlyweekly.expensesproject.JpaRepository.LoginRepository;
import com.monthlyweekly.expensesproject.JpaRepository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private UserRepository userRepository;
    private LoginRepository loginRepository;

    public UserController(UserRepository userRepository, LoginRepository loginRepository){
        this.userRepository = userRepository;
        this.loginRepository = loginRepository;
    }

    /*
    // Register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user ){
        return userRepository.save(user);
    }
*/
    @PostMapping("/register")
    public User registerUser(@RequestBody User user ){
        User savedUser = userRepository.save(user);

        // Create new login entity
        Login login = new Login();
        login.setUsername(user.getUsername());
        login.setPass(user.getPass());

        // Save the login entity
        loginRepository.save(login);

        return savedUser;
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by username
    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userRepository.findByUsername(username);
    }

    // Get user by phone
    @GetMapping("/phone/{phone}")
    public User getUserByPhone(@PathVariable String phone) {
        return userRepository.findByPhone(phone);
    }

    @GetMapping("/exists/{username}")
    public boolean usernameExists(@PathVariable String username) {
        return userRepository.existsByUsername(username);
    }

    // Update user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            user.setPass(updatedUser.getPass());
            return userRepository.save(user);
        }).orElseGet(() -> {
            updatedUser.setId(id);
            return userRepository.save(updatedUser);
        });
    }

    // Delete user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }



    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login login) {
        Login foundLogin = loginRepository.findByUsernameAndPass(login.getUsername(), login.getPass());

        if (foundLogin == null) {

            logger.error("Invalid User or password");
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);

        } else {
            logger.info("Successful Login");
            return new ResponseEntity<>(foundLogin, HttpStatus.OK);
        }
    }

}








//Null Exception Error:

/*
import com.monthlyweekly.expensesproject.JpaEntity.Login;
import com.monthlyweekly.expensesproject.JpaEntity.User;
import com.monthlyweekly.expensesproject.JpaRepository.LoginRepository;
import com.monthlyweekly.expensesproject.JpaRepository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserRepository userRepository;

    private LoginRepository loginRepository;

    public UserController(UserRepository userRepository, LoginRepository loginRepository){
        this.userRepository = userRepository;
        this.loginRepository = loginRepository;
    }

    // Default constructor
    public UserController() {
    }

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    // Register new user

    @PostMapping("/register")
    public User registerUser(@RequestBody User user ){
        return userRepository.save(user);
    }

*/

    /*
    @PostMapping("/register")
    public User registerUser(@RequestBody User user ){
        User savedUser = userRepository.save(user);

        // Create new login entity
        Login login = new Login();
        login.setUsername(user.getUsername());
        login.setPass(user.getPass());

        // Save the login entity
        loginRepository.save(login);

        return savedUser;
    }
*/

/*
    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by username
    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userRepository.findByUsername(username);
    }

    // Get user by phone
    @GetMapping("/phone/{phone}")
    public User getUserByPhone(@PathVariable String phone) {
        return userRepository.findByPhone(phone);
    }


    @GetMapping("/exists/{username}")
    public boolean usernameExists(@PathVariable String username) {
        return userRepository.existsByUsername(username);
    }


    // Update user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            user.setPass(updatedUser.getPass());
            return userRepository.save(user);
        }).orElseGet(() -> {
            updatedUser.setId(id);
            return userRepository.save(updatedUser);
        });
    }

    // Delete user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }


}
*/
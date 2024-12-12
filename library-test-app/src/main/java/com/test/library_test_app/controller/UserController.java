package com.test.library_test_app.controller;

import com.test.library_test_app.service.UserService;
import com.test.library_test_app.users.entity.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.Map;

@RestController
@RequestMapping("/userApi")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    @PostMapping("/user")
    public User postBook(@RequestBody User user){
        return userService.postUser(user);
    }

    @GetMapping("users")
    public LinkedList<User> getAlUser(){
        return userService.getAllUser();
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        try {
            userService.deleteUser(id);
            return new ResponseEntity<>(" Book with ID " + '"' + id + '"' + " was deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id){
        User user = userService.getUserById(id);
        if(user == null ) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(user);
    }

    @PatchMapping("/user/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @RequestBody User user){
        User updateBook = userService.updateUser(id, user);
        System.out.println("User has Updating Book");

        if( updateBook == null ) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.ok(updateBook);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            User authenticatedUser = userService.authenticateUser(user.getUserName(), user.getUserPassword());
            return ResponseEntity.ok(authenticatedUser); // Return user details on successful login
        } catch (EntityNotFoundException e) {
            // Return a JSON response with an error message
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    Map.of("error", "Invalid username or password")
            );
        }
    }
}

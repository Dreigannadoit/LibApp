package com.test.library_test_app.service;

import com.test.library_test_app.users.entity.User;
import com.test.library_test_app.users.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User postUser(User user) {
        return userRepository.save(user);
    }

    public LinkedList<User> getAllUser() {
        // Convert the result of findAll to a LinkedList
        List<User> user = userRepository.findAll();
        return new LinkedList<>(user);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("No User with the id " + '"' + id + '"' + " is in our database, Dumb Ass");
        }
        userRepository.deleteById(id);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User user) {
        Optional<User> optionalUser = userRepository.findById(id);

        // Only update if the User exists in the database
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            existingUser.setUserName(user.getUserName());
            existingUser.setUserStatus(user.getUserStatus());
            existingUser.setUserJoined(user.getUserJoined());

            return userRepository.save(existingUser);
        }

        return null;
    }
}

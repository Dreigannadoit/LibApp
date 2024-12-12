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

    public User authenticateUser(String userName, String userPassword) {
        Optional<User> user = userRepository.findByUserName(userName);
        if (user.isPresent() && user.get().getUserPassword().equals(userPassword)) {
            return user.get();
        }
        throw new EntityNotFoundException("Invalid username or password");
    }

    public User postBook(User user) {
        return userRepository.save(user);
    }

    public LinkedList<User> getAllUser() {
        List<User> users = userRepository.findAll();
        return new LinkedList<>(users);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("No User with the ID " + id + " found.");
        }
        userRepository.deleteById(id);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User user) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setUserName(user.getUserName());
            // Remove or fix these lines if userStatus and userJoined don't exist in the User entity
           

            return userRepository.save(existingUser);
        }

        return null;
    }
}

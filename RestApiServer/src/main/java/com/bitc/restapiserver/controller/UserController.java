package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.dto.UserDto;
import com.bitc.restapiserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @RequestMapping(value = "/userList", method = RequestMethod.GET)
    public Object userList() throws Exception {
        Map<String, Object> result = new HashMap<>();
        List<UserDto> userList = userService.getUserList();

        if (userList.size() > 0) {
        result.put("result", "success");
        result.put("userList", userList);
        } else {
            result.put("result", "error");
            result.put("msg", "result 0");
        }
        return result;
    }

//    @RequestMapping(value = "/join", method = RequestMethod.POST)
//    public void join(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw, @RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail) throws Exception {
//        UserDto user = new UserDto();
//        user.setUserId(userId);
//        user.setUserPw(userPw);
//        user.setUserName(userName);
//        user.setUserEmail(userEmail);
//
//        userService.join(user);
//    }


    @RequestMapping(value = "/join", method = RequestMethod.POST)
    public void join(UserDto user) throws Exception {
        userService.join(user);
    }
}

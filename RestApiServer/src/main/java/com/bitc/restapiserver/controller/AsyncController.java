package com.bitc.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RequestMapping("/async")
@RestController
public class AsyncController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() throws Exception {
        return "index 페이지";
    }

    @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
    public Object sendDataGet() throws Exception {
        Map<String, String> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", "axios를 이용한 비동기 통신");

        return result;
    }

    @RequestMapping(value = "/sendDataGetParam", method = RequestMethod.GET)
    public Object sendDataGetParam(@RequestParam("idx") int idx) throws Exception{
        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        result.put("data", "1");

        return result;
    }

    @RequestMapping(value = "/sendDataPost", method = RequestMethod.POST)
    public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception {
        Map<String, String> user = new HashMap<>();

        user.put("userId", userId);
        user.put("userPw", userPw);

        Map<String, Object> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", user);

        return result;
    }

    @RequestMapping(value = "/sendDataPut", method = RequestMethod.PUT)
    public Object sendDataPut(@RequestParam("idx") int idx) throws Exception {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        result.put("idx", idx);

        return result;
    }

    @RequestMapping(value = "/sendDataDelete", method = RequestMethod.DELETE)
    public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        result.put("idx", idx);
        return result;
    }
}


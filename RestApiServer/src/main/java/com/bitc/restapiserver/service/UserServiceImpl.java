package com.bitc.restapiserver.service;
import com.bitc.restapiserver.dto.UserDto;
import com.bitc.restapiserver.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserMapper userMapper;
    @Override
    public List<UserDto> getUserList() throws Exception {
        return userMapper.getUserList();
    }

    @Override
    public void join(UserDto user) throws Exception {
        userMapper.join(user);
    }
}

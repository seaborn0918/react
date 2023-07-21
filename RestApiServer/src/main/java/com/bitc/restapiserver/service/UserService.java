package com.bitc.restapiserver.service;

import com.bitc.restapiserver.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> getUserList() throws Exception;

    void join(UserDto user) throws Exception;
}

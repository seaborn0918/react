package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    public List<UserDto> getUserList() throws Exception;

    void join(UserDto user) throws Exception;
}

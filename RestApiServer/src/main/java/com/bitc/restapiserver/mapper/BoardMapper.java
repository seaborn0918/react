package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDto> getBoardList() throws Exception;

  BoardDto getBoardDetail(int boardIdx) throws Exception;

  void boardWrite(BoardDto board) throws Exception;

  void boardDelete(int boardIdx) throws Exception;

  void boardEdit(BoardDto board) throws Exception;
}

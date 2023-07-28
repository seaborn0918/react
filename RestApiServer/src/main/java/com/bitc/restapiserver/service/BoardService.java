package com.bitc.restapiserver.service;

import com.bitc.restapiserver.dto.BoardDto;

import java.util.List;

public interface BoardService {
  List<BoardDto> getBoardList() throws Exception;

  BoardDto getBoardDetail(int boardIdx) throws Exception;

  void boardWrite(BoardDto board) throws Exception;

  void boardDelete(int boardIdx) throws Exception;

  void boardEdit(BoardDto board) throws Exception;
}

package com.bitc.restapiserver.service;

import com.bitc.restapiserver.dto.BoardDto;
import com.bitc.restapiserver.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{
  private final BoardMapper boardMapper;

  @Override
  public List<BoardDto> getBoardList() throws Exception {
    return boardMapper.getBoardList();
  }

  @Override
  public BoardDto getBoardDetail(int boardIdx) throws Exception {
    return boardMapper.getBoardDetail(boardIdx);
  }

  @Override
  public void boardWrite(BoardDto board) throws Exception {
    boardMapper.boardWrite(board);
  }

  @Override
  public void boardDelete(int boardIdx) throws Exception {
    boardMapper.boardDelete(boardIdx);
  }

  @Override
  public void boardEdit(BoardDto board) throws Exception {
    boardMapper.boardEdit(board);
  }
}

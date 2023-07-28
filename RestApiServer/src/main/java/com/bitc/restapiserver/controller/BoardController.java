package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.dto.BoardDto;
import com.bitc.restapiserver.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/board")
@RestController
public class BoardController {
  private final BoardService boardService;

  // 게시글 목록
  @GetMapping("/")
  public Object getBoardList() throws Exception {
    Map<String, Object> result = new HashMap<>();
    List<BoardDto> boardList = boardService.getBoardList();

    if (boardList.size() > 0) {
      result.put("result", "success");
      result.put("boardList", boardList);
    } else {
      result.put("result", "error");
      result.put("msg", "데이터가 없음");
    }
    return result;
  }

  // 게시글 상세
  @GetMapping("/{boardIdx}")
  public Object boardDetail(@PathVariable("boardIdx") int boardIdx) throws Exception {
    Map<String, Object> result = new HashMap<>();
    BoardDto board = boardService.getBoardDetail(boardIdx);

    result.put("result", "success");
    result.put("board", board);

    return result;
  }

  // 게시글쓰기
  @PostMapping("/write")
  public void boardWrite(@RequestParam("title") String title, @RequestParam("contents") String contents, @RequestParam("createId") String createId) throws Exception {
    BoardDto board = new BoardDto();
    board.setTitle(title);
    board.setContents(contents);
    board.setCreateId(createId);
    boardService.boardWrite(board);
  }

  @PutMapping("/edit/{boardIdx}")
  public void boardEdit(@PathVariable("boardIdx") int boardIdx, @RequestParam("title") String title, @RequestParam("contents") String contents, @RequestParam("updateId") String updateId) throws Exception {
    BoardDto board = new BoardDto();
    board.setBoardIdx(boardIdx);
    board.setTitle(title);
    board.setContents(contents);
    board.setUpdateId(updateId);
    boardService.boardEdit(board);

  }


  @DeleteMapping("/delete/{boardIdx}")
  public void boardDelete(@PathVariable("boardIdx") int boardIdx) throws Exception {
    boardService.boardDelete(boardIdx);
  }
}

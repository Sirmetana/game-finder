package com.game_finder.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.game_finder.back.config.ApiHeaders.USER_ID_HEADER;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @GetMapping
    public List<?> getFavorites(@RequestHeader(USER_ID_HEADER) UUID userId) {
        return new ArrayList<>();
    }
}

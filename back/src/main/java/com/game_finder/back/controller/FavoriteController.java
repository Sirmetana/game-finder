package com.game_finder.back.controller;

import com.game_finder.back.dtos.FavoriteResponse;
import com.game_finder.back.services.FavoriteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

import static com.game_finder.back.config.ApiHeaders.USER_ID_HEADER;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {
    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @GetMapping
    public List<FavoriteResponse> getFavorites(@RequestHeader(USER_ID_HEADER) UUID userId) {
        return favoriteService.getFavoritesByUser(userId);
    }
}

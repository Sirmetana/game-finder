package com.game_finder.back.controller;

import com.game_finder.back.dtos.FavoriteResponse;
import com.game_finder.back.services.FavoriteService;
import jakarta.validation.constraints.Min;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/{gameId}")
    @ResponseStatus(HttpStatus.CREATED)
    public FavoriteResponse addFavorite(@RequestHeader(USER_ID_HEADER) UUID userId, @Min(1) @PathVariable Integer gameId) {
        return favoriteService.addFavorite(userId, gameId);
    }

    @DeleteMapping("/{gameId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeFavorite(@RequestHeader(USER_ID_HEADER) UUID userId, @Min(1) @PathVariable Integer gameId) {
        favoriteService.removeFavorite(userId, gameId);
    }
}

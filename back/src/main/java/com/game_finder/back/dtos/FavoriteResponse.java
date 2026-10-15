package com.game_finder.back.dtos;

import java.time.Instant;

public record FavoriteResponse(Integer gameId, Instant createdAt) {
}

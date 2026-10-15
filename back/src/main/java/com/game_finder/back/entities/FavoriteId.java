package com.game_finder.back.entities;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Embeddable
public class FavoriteId implements Serializable {
    private Integer gameId;
    private UUID userId;

    protected FavoriteId(){}

    public FavoriteId(Integer gameId, UUID userId){
        this.gameId = gameId;
        this.userId = userId;
    }

    public Integer getGameId() {
        return gameId;
    }

    public UUID getUserId() {
        return userId;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        FavoriteId that = (FavoriteId) o;
        return Objects.equals(gameId, that.gameId) && Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(gameId, userId);
    }
}

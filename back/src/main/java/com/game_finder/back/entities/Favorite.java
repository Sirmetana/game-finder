package com.game_finder.back.entities;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "favorites", indexes = {@Index(columnList = "user_id")})
public class Favorite {
    @EmbeddedId
    private FavoriteId id;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    void onCreate(){
        this.createdAt = Instant.now();
    }

    protected Favorite(){}

    public Favorite(FavoriteId id) {
        this.id = id;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public FavoriteId getId() {
        return id;
    }
}

package com.game_finder.back.repositories;

import com.game_finder.back.entities.Favorite;
import com.game_finder.back.entities.FavoriteId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FavoriteRepository extends JpaRepository<Favorite, FavoriteId> {
    List<Favorite> findById_UserIdOrderByCreatedAtDesc(UUID idUserId);
}

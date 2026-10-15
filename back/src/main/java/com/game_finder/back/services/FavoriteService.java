package com.game_finder.back.services;

import com.game_finder.back.dtos.FavoriteResponse;
import com.game_finder.back.entities.Favorite;
import com.game_finder.back.repositories.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FavoriteService {
    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public List<FavoriteResponse> getFavoritesByUser(UUID userId) {
        List<Favorite> favorites = favoriteRepository.findById_UserIdOrderByCreatedAtDesc(userId);
        return favorites.stream()
                .map(el -> new FavoriteResponse(
                        el.getId().getGameId(),
                        el.getCreatedAt()
                ))
                .toList();
    }

}

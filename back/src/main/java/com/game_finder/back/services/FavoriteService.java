package com.game_finder.back.services;

import com.game_finder.back.dtos.FavoriteResponse;
import com.game_finder.back.entities.Favorite;
import com.game_finder.back.entities.FavoriteId;
import com.game_finder.back.repositories.FavoriteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    public FavoriteResponse addFavorite(UUID userId, Integer gameId) {
        FavoriteId id = new FavoriteId(gameId, userId);
        if (favoriteRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Favoris déjà existant");
        }
        Favorite favorite = new Favorite(id);
        Favorite savedFavorite = favoriteRepository.save(favorite);
        return new FavoriteResponse(savedFavorite.getId().getGameId(), savedFavorite.getCreatedAt());
    }

    public void removeFavorite(UUID userId, Integer gameId) {
        FavoriteId id = new FavoriteId(gameId, userId);
        if (!favoriteRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ce jeu n'est pas dans vos favoris");
        }
        favoriteRepository.deleteById(id);
    }

}

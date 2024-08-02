import { readItems } from "@directus/sdk";
import api from "./httpDirectus";

export default class Controller {
    static async fetchAlbums() {
        return api.request(readItems("albums"));
    }
    static async fetchImages(album) {
        return api.request(
            readItems("Images", {
                filter: {
                    album: {
                        _eq: album,
                    },
                }
            })
        );
    }

    static async fetchAlbumLength(album) {
        return api.request(
            readItems("Images", {
                filter: {
                    album: {
                        _eq: album,
                    },
                },
                aggregate: { count: "*" },
            }))
    }
}

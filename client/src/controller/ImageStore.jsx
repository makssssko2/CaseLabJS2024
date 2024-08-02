import { makeAutoObservable, runInAction } from "mobx";
import Controller from "./controller";

class ImageStore {
    isLoading = false;
    albums = [];
    // albumLengths = [];
    images = [];

    constructor() {
        this.albums = [];
        this.images = [];
        makeAutoObservable(this, {}, { autoBind: true });
    }

    fetchAlbums = async () => {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            const albums = await Controller.fetchAlbums();
            runInAction(() => {
                this.albums = albums;
            });
        } catch (error) {
            console.log(error);
        }  finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    fetchImages = async (album) => {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            const images = await Controller.fetchImages(album);
            runInAction(() => {
                this.images = images;
            });
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    // Не довел до ума немного
    fetchAlbumLength = async (album) => {
        try {
            runInAction(() => {
                this.isLoading = true;
            });
            return Controller.fetchAlbumLength(album);
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };
}

export default new ImageStore();

import LocationService from './LocationService';
import http from '../http-common';

jest.mock('../http-common');

describe('LocationService', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should call GET /locations', async () => {
        await LocationService.getAll();
        expect(http.get).toHaveBeenCalledWith('/locations');

    });

    it('should call GET /locations/:id', async () => {
        await LocationService.get(1);
        expect(http.get).toHaveBeenCalledWith('/locations/1');
    });

    it('should call POST /locations with data', async () => {
        const data = { name: 'test' };
        await LocationService.create(data);
        expect(http.post).toHaveBeenCalledWith('/locations', data);

    });

    it('should call PUT /locations/:id with data', async () => {
        const data = { name: 'test' };
        await LocationService.update(1, data);
        expect(http.put).toHaveBeenCalledWith('/locations/1', data);
    });

    it('should call DELETE /locations/:id', async () => {
        await LocationService.remove(1);
        expect(http.delete).toHaveBeenCalledWith('/locations/1');
    });

    it('should call DELETE /locations', async () => {
        await LocationService.removeAll();
        expect(http.delete).toHaveBeenCalledWith('/locations');
    });

    it('should call GET /locations?name=:name', async () => {
        await LocationService.findByName('test');
        expect(http.get).toHaveBeenCalledWith('/locations?name=test');
    });
});
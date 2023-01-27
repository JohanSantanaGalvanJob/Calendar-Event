import EventTypeService from './EventTypeService';
import http from '../http-common';

jest.mock('../http-common');

describe('EventTypeService', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should call GET /event_types', async () => {
        await EventTypeService.getAll();
        expect(http.get).toHaveBeenCalledWith('/event_types');

    });

    it('should call GET /event_types/:id', async () => {
        await EventTypeService.get(1);
        expect(http.get).toHaveBeenCalledWith('/event_types/1');
    });

    it('should call POST /event_types with data', async () => {
        const data = { name: 'Test event type' };
        await EventTypeService.create(data);
        expect(http.post).toHaveBeenCalledWith('/event_types', data);

    });

    it('should call PUT /event_types/:id with data', async () => {
        const data = { name: 'Updated event type' };
        await EventTypeService.update(1, data);
        expect(http.put).toHaveBeenCalledWith('/event_types/1', data);
    });

    it('should call DELETE /event_types/:id', async () => {
        await EventTypeService.remove(1);
        expect(http.delete).toHaveBeenCalledWith('/event_types/1');
    });

    it('should call DELETE /event_types', async () => {
        await EventTypeService.removeAll();
        expect(http.delete).toHaveBeenCalledWith('/event_types');
    });

    it('should call GET /event_types?name=:name', async () => {
        await EventTypeService.findByName('Test event type');
        expect(http.get).toHaveBeenCalledWith('/event_types?name=Test event type');
    });
});
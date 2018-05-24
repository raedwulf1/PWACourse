import { PushNotificationsService } from "./pushNotifications.service";
import { TestBed } from "@angular/core/testing";

describe("PushNotificationsService", () => {

  let service: PushNotificationsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PushNotificationsService
      ]
    });
    service = TestBed.get(PushNotificationsService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});

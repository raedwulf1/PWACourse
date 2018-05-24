import { TodosService } from "./todos.service";
import { TestBed } from "@angular/core/testing";

describe("TodosService", () => {

  let service: TodosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService
      ]
    });
    service = TestBed.get(TodosService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});

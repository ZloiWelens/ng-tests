import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {ComponentFixture, fakeAsync, tick, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponent>
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule]
    })

    fixture = TestBed.createComponent(PostsComponent)
    component = fixture.componentInstance
    service = TestBed.inject(PostsService)
  })

  it('should fetch posts from ngOnInit (promise)', fakeAsync(() => {
    const posts = [1,2,3,4,5,6]
    spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(posts))

    fixture.detectChanges()

    tick(500)

    expect(component.posts.length).toBe(posts.length)
  }));
})

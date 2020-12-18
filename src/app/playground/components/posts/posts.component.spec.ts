import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';

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

  it('should fetch posts from ngOnInit', () => {
    const posts = [1,2,3,4,5,6]
    spyOn(service, 'fetch').and.returnValue(of(posts))

    fixture.detectChanges()

    expect(component.posts).toEqual(posts)
  });
})

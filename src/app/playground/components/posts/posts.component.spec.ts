import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {EMPTY, of, throwError} from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })
})

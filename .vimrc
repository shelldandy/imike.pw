" Linting
let g:syntastic_javascript_checkers = ['eslint']
autocmd bufwritepost *.js silent !eslint --fix %
set autoread

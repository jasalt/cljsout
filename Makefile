BASEDIR=$(CURDIR)
OUTPUTDIR=$(BASEDIR)/resources/public
GITHUB_PAGES_BRANCH=gh-pages

help:
	@echo 'Makefile for pushing clojurescript development preview to Github Pages.   '
	@echo 'Requires ghp-import tool for Python 2. OVERWRITES gh-pages branch on run! '
	@echo 'Usage:                                                                    '
	@echo '   make github                      push latest build to gh-pages         '

github:
	ghp-import -m "Update gh-pages preview." -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR)
	git push origin $(GITHUB_PAGES_BRANCH)

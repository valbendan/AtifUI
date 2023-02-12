help:
	@echo "make run 本地运行"
	@echo "make outdated 查询老旧版本的依赖"

run:
	yarn start

outdated:
	yarn outdated

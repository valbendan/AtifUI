help:
	@echo "make run 本地运行"
	@echo "make outdated 查询老旧版本的依赖"

run:
	yarn start

outdated:
	yarn outdated

# download from https://github.com/valbendan/Atif/releases
download-atif-macos:
	cd bin && wget https://github.com/valbendan/Atif/releases/download/v1.0.3/AtifExe.macOS
